import React, { Component } from 'react';

import {

	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	Alert
} from 'react-native';


// import Button from './button';

import RNFetchBlob from 'react-native-fetch-blob';
import { RNCamera, FaceDetector } from 'react-native-camera';

import _ from 'lodash';
import Header from '../../Component/Header/Header';
import Button from '../../Component/Button';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markAttandance } from '../../Redux/Action/ProfileAction';
import { SkypeIndicator } from 'react-native-indicators'
const key = '0c717805738e46699413c0aac970d30e'
// const key='120de0f00bd649269c4c790ff60af5aa'
class Detector2 extends Component {
	constructor(props) {
		console.log('props faceId', props);
		super(props);
		this.state = {
			loading: false,
			button: 'Attandance',
			box: null,
			photo_style: {
				position: 'relative',
				width: 480,
				height: 480
			},
			has_photo: false,
			photo: null,
			face_data: null,
			userFaceID: props.route?.params?.faceId,
			location_id: props.route.params.location_id
		};
	}

	onFaceDetected = ({ faces }) => {

		if (faces[0]) {
			this.setState({
				box: {
					width: faces[0].bounds.size.width,
					height: faces[0].bounds.size.height,
					x: faces[0].bounds.origin.x,
					y: faces[0].bounds.origin.y,
					yawAngle: faces[0].yawAngle,
					rollAngle: faces[0].rollAngle,
				},

				rightEyePosition: faces[0].rightEyePosition,
				leftEyePosition: faces[0].leftEyePosition,
			})

		}
		else {
			this.setState({
				box: null,
				leftEyePosition: null,
				rightEyePosition: null,
			});

		}
	};


	render() {
		return (
			<View style={{ height: Dimensions.get('screen').height, width: Dimensions.get('screen').width }}>
				{this.state.loading ?
					<View style={{
						height: Dimensions.get('screen').height, width: Dimensions.get('screen').width, backgroundColor: 'rgba(52, 52, 52, 0.4)'
						, position: 'absolute', zIndex: 5
					}}>
						<View style={{ marginTop: 300 }}>
							<SkypeIndicator color='green' />
						</View>
					</View>
					: null}
				<Header
					// secondImgPress={()=>this.props.navigation.navigate('Calander')}
					backTextStyle={{ color: '#c85a2e', marginLeft: 5 }}
					backIcon={{ height: 15, width: 15 }}
					textButton={'back'}
					iconPress={() => this.props.navigation.goBack()}
					// rightImage2={require('../../Assets/calander.png')}
					rightImage1={null}
					backButton
					iconName={require('../../Assets/back.png')}
				// title='User Name'
				/>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={{
						flex: 1,
						
						alignItems: 'center',
					}}
					type={RNCamera.Constants.Type.front}
					// flashMode={RNCamera.Constants.FlashMode.on}
					androidCameraPermissionOptions={{
						title: 'Permission to use camera',
						message: 'We need your permission to use your camera',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
					// androidRecordAudioPermissionOptions={{
					// 	title: 'Permission to use audio recording',
					// 	message: 'We need your permission to use your audio',
					// 	buttonPositive: 'Ok',
					// 	buttonNegative: 'Cancel',
					// }}
					onGoogleVisionBarcodesDetected={({ barcodes }) => {
					}}
					focusable
					faceDetectionMode={FaceDetector.Constants.Mode.accurate}
					onFacesDetected={this.onFaceDetected}
				/>
				<View style={{ position: 'absolute', bottom: 0, height: "30%", paddingTop: '8%', borderTopEndRadius: 20, borderTopStartRadius: 20, backgroundColor: 'rgba(0,0,0,0.3)' }}>
					<Text style={[styles.signText, { fontSize: 28, color: 'white', fontWeight: 'bold', textAlign: 'center' }]}> {moment().format('hh:mm a')} </Text>
					<Text numberOfLines={1} style={[styles.signText, { color: 'white', width: '100%', textAlign: 'center' }]}>{moment().format('dddd DD MMMM')} </Text>

					<View style={{ marginTop: 20, width: Dimensions.get('screen').width, alignItems: 'center' }}>
						<Button
							onPress={() => {
								this._detectFaces()
							}}
							text={'Capture'}
							buttonStyle={{ borderWidth: 1, borderColor: 'white' }}
						/>
					</View>
				</View>


			</View>
		);
	}


	_pickImage() {

		this.setState({
			face_data: null
		});


	}


	_detectFaces() {
		this.setState({ loading: true })
		this.camera.takePictureAsync({ base64: true, quality: 0.25 }).then((res) => {
			console.log('picture', res);


			RNFetchBlob.fetch('POST', 'https://learnerbiometrics.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&detectionModel=detection_02', {
				'Accept': 'application/json',
				'Content-Type': 'application/octet-stream',
				'Ocp-Apim-Subscription-Key': key
			}, res.base64)
				.then((res) => {

					let json = res.json()
					console.log('with json', json,this.state.userFaceID);
					if (json.length) {
						RNFetchBlob.fetch('POST', 'https://learnerbiometrics.cognitiveservices.azure.com/face/v1.0/verify', {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							'Ocp-Apim-Subscription-Key': key
						}, JSON.stringify({
							faceId1: this.state.userFaceID,
							faceId2: json[0].faceId,

						}))
							.then((res) => {
								console.log('witout json', res);
								return res.json();
							})
							.then((json) => {
								console.log('with json22', json);
								if (json.confidence > 0.5 && json.isIdentical == true) {
									this.setState({ loading: false })
									this.props.onSubmit(this.state.location_id, this.props.navigation)
									return true
								} else {
									this.setState({ loading: false })
									Alert.alert(
										'',
										"Not able to scan",
										[
											{
												text: 'Retry', onPress: () => {

												}
											},
											{
												text: 'back', onPress: () => {
													this.props.navigation.goBack()
												}
											}
										]

									);
								}

								return json;
							})
							.catch((error) => {
								this.setState({ loading: false })
								console.log('error', error);
								Alert.alert(
									'',
									"Not able to scan",
									[
										{
											text: 'Retry', onPress: () => {

											}
										},
										{
											text: 'back', onPress: () => {
												this.props.navigation.goBack()
											}
										}
									]

								);
							});
					} else {
						this.setState({ loading: false })

						Alert.alert(
							'',
							"Not able to scan",
							[
								{
									text: 'Retry', onPress: () => 
									{

									}
								},
								{
									text: 'back', onPress: () => 
									{
										this.props.navigation.goBack()
									}
								}
							]

						);
					}

					return json;
				})
				.catch((error) => {
					this.setState({ loading: false })
					console.log('error', error);
					Alert.alert(
						'',
						"Not able to scan",
						[
							{
								text: 'Retry', onPress: () => {

								}
							},
							{
								text: 'back', onPress: () => {
									this.props.navigation.goBack()
								}
							}
						]

					);
				});
		})
	}
	_renderFaceBoxes() {

		if (this.state.face_data) {

			let views = _.map(this.state.face_data, (x) => {

				let box = {
					position: 'absolute',
					top: x.faceRectangle.top,
					left: x.faceRectangle.left
				};

				let style = {
					width: x.faceRectangle.width,
					height: x.faceRectangle.height,
					borderWidth: 2,
					borderColor: '#fff',
				};

				let attr = {
					color: '#fff',
				};

				return (
					<View key={x.faceId} style={box}>
						<View style={style}></View>
						<Text style={attr}>{x.faceAttributes.gender}, {x.faceAttributes.age} y/o</Text>
					</View>
				);
			});

			return <View>{views}</View>
		}

	}

}

function mapStateToProps(state) {
		
}
function mapDispatchToProps(dispatch) {
	return {
		onSubmit: (id, navigation) => {
			dispatch(markAttandance(id, navigation))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Detector2)
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#ccc'
	},
	button: {
		position: 'absolute',
		bottom: 100,
		margin: 10,
		padding: 15,
		backgroundColor: '#529ecc'
	},
	button_text: {
		color: '#FFF',
		fontSize: 20
	}
});
