import React from 'react'

import { Image, TouchableOpacity, StyleSheet, View, Text, Dimensions, SafeAreaView, Alert} from 'react-native'
import VerticalSlider from 'rn-vertical-slider'
import { Icon, Tooltip, Button, Card } from 'react-native-elements'
import ToolTipRatios from './ToolTipRatios'

import { Switch } from 'react-native-switch';


import * as color from '../assets/colors'


var {height, width} = Dimensions.get('window');

class RatioBeer extends React.Component{
  static navigationOptions = ({ navigate, navigation }) => ({
    headerLeft: () => {
      return (
        <TouchableOpacity
          style = {styles.icon}
          onPress={ ()=>{ navigation.navigate('Home') } }>
          <Icon
            name = "home"
            type = "octicon"
            color = {color.colorDivider}
            size = {30}
            iconStyle = {styles.icon}
          />
        </TouchableOpacity>
      )
    },
    headerRight: (
        <ToolTipRatios
        />
    )
  })




  constructor(props){
    super(props)
    this.state= {
      ibu: 0,
      price: 0,
      alcool: 0,
      
      enabledSlidersIBU: true,
      disabledSwitchIBU: false,
      colorIbu: color.colorIbu,
      
      enabledSlidersPRICE: true,
      disabledSwitchPRICE: false,
      colorPrice: color.colorPrice,
      
      enabledSlidersABV: true,
      disabledSwitchABV: false,
      colorAbv: color.colorAlcool,

      beers :[],
      isLoading: false,

      nbEnableSlider: 3

    },
    this.sliderWidth = 35,
    this.sliderHeight = height/3,
    this.sliderBallIndicatorWidth = 35,
    this.sliderBallIndicatorPosition = -40    
    

  }
  // componentDidMount(){
  //   console.log("toolTip " + this.toolTipVisible);
  //   if{this.toolTipVisible !== undefined}{
  //     this.setState({

  //     })
  //   }
  // }


  _updateSliderIbu (value){
    const number = value.toFixed(1)
    this.setState({
      ibu : parseFloat(number)
    })
  }

  _updateSliderPrice (value){
    const number = value.toFixed(1)
    this.setState({
      price : parseFloat(number)
    })
  }

  _updateSliderAlcool (value){
    const number = value.toFixed(1)
    this.setState({
      alcool : parseFloat(number)

    })
  }


  _disableSliderIBU(val, nb){
    const colorSlider = val === false ? color.colorDisabled : color.colorIbu
    const nbToAdd = val === false ? -1 : 1
    if(!this.state.disabledSwitchIBU){

      this.setState(
        {
        enabledSlidersIBU : val,
        colorIbu: colorSlider,
        nbEnableSlider: this.state.nbEnableSlider + nbToAdd
        }, () => this._updateDisabledSwitch(val, nb))
    }else{
      console.log('====================================');
      console.log("Nombre de sliders dispo : " + this.state.nbEnableSlider+ "\n Disable ? :\nIBU " + this.state.disabledSwitchIBU + "\nPRICE: "+ this.state.disabledSwitchPRICE +"\nABV : " +this.state.disabledSwitchABV);
      console.log('====================================');
      this._updateDisabledSwitch(val, nb);
    }
  }
  _disableSliderPrice(val, nb){
    const colorSlider = val === false ? color.colorDisabled : color.colorPrice
    const nbToAdd = val === false ? -1 : 1
    if(!this.state.disabledSwitchPRICE){
      this.setState(
        {
        enabledSlidersPRICE : val,
        colorPrice: colorSlider,
        nbEnableSlider: this.state.nbEnableSlider + nbToAdd
        }, () => this._updateDisabledSwitch(val, nb))
    }else{
      console.log('====================================');
      console.log("Nombre de sliders dispo : " + this.state.nbEnableSlider+ "\n Disable ? :\nIBU " + this.state.disabledSwitchIBU + "\nPRICE: "+ this.state.disabledSwitchPRICE +"\nABV : " +this.state.disabledSwitchABV);
      console.log('====================================');
      this._updateDisabledSwitch(val, nb);
    }
  }
  _disableSliderABV(val, nb){
    const colorSlider = val === false ? color.colorDisabled : color.colorAlcool
    const nbToAdd = val === false ? -1 : 1
    if(!this.state.disabledSwitchABV){
      this.setState(
        {
        enabledSlidersABV : val,
        colorAbv: colorSlider,
        nbEnableSlider: this.state.nbEnableSlider + nbToAdd
        }, () => this._updateDisabledSwitch(val, nb))

    }else{
      console.log('====================================');
      console.log("Nombre de sliders dispo : " + this.state.nbEnableSlider+ "\n Disable ? :\nIBU " + this.state.disabledSwitchIBU + "\nPRICE: "+ this.state.disabledSwitchPRICE +"\nABV : " +this.state.disabledSwitchABV);
      console.log('====================================');
      this._updateDisabledSwitch(val, nb);
    }
  }

  _updateDisabledSwitch(val,type){
    const nbES = this.state.nbEnableSlider

    console.log("On vérifie");
    console.log('====================================');
    console.log("Nombre de enable : " + nbES);
    
    console.log("EnableIBU : " + this.state.enabledSlidersIBU);
    console.log("\tDisable ? : " +this.state.disabledSwitchIBU);
    
    console.log("EnablePrice : " + this.state.enabledSlidersPRICE);
    console.log("\tDisable ? : " +this.state.disabledSwitchPRICE);

    console.log("EnableABV : " + this.state.enabledSlidersABV);
    console.log("\tDisable ? : " +this.state.disabledSwitchABV);

    console.log('====================================');
        
    
    //S'il y en à disabler
    if(nbES === 1){
      Alert.alert("Un critère minimum est requis")
      console.log("Val ? : " + val);
      
      //IBU
      if(this.state.enabledSlidersIBU === true){
        var disSI = true
        console.log("!!!!ibu!!!");
        
      }else{
        var disSI = false
      }

      //PRICE
      if(this.state.enabledSlidersPRICE === true){
        var disSP = true
        console.log("!!!price!!!");
        
      }else{
        var disSP = false
      }

      //ABV
      if(this.state.enabledSlidersABV === true){
        var disSA = true
        console.log("!!!abv!!!");
        
      }else{
        var disSA = false
      }

      //On modifie
      this.setState({
        disabledSwitchIBU: disSI,
        disabledSwitchPRICE: disSP,
        disabledSwitchABV: disSA
      })
      
    }
    //Sinon on active tout
    else{
      this.setState({
        disabledSwitchIBU: false,
        disabledSwitchPRICE: false,
        disabledSwitchABV: false
      })
    }
  }





  _displayRatioSearchBeer(){
    var ibu =0
    if( this.state.enabledSlidersIBU ){
      ibu = this.state.ibu
    }else if( !this.state.enabledSlidersIBU ){
      ibu = 150
    }
    var price =0
    if( this.state.enabledSlidersPRICE ){
      price = this.state.price
    }else if( !this.state.enabledSlidersPRICE ){
      price = 150
    }
    var abv =0
    if( this.state.enabledSlidersABV){
      abv = this.state.alcool
    }else if( !this.state.enabledSlidersABV ) {
      abv = 150
    }
    this.props.navigation.navigate('RatioSearchBeer', {ibu: ibu, price: price, abv: abv})
    
  }


  render() {
    return(
      <SafeAreaView style = {styles.main_container}>
        <Card
          title = " AJUSTEZ VOS RATIOS "
          containerStyle = { styles.card }
          dividerStyle = {styles.cardDivider}
          titleStyle = {styles.cardTitle}
        >
          <View
            style = {styles.container_slider}
          >
            <View style = {styles.container}>
              <VerticalSlider
                value={this.state.ibu}
                disabled={! this.state.enabledSlidersIBU}
                min={0}
                max={120}
                onChange={(value) => {
                  this._updateSliderIbu(value)
                }}
                onComplete={(value) => {

                }}
                width={ this.sliderWidth}
                height={ this.sliderHeight}
                step={20}
                borderRadius={150}
                minimumTrackTintColor={this.state.colorIbu}
                maximumTrackTintColor={color.colorBackItem}
                showBallIndicator = {true}
                ballIndicatorColor={this.state.colorIbu}
                ballIndicatorTextColor={'white'}
                ballIndicatorWidth = {this.sliderBallIndicatorWidth}
                ballIndicatorPosition = {this.sliderBallIndicatorPosition}
              />
            </View>

            <View style = {styles.container}>
              <VerticalSlider
                value={this.state.price}
                disabled={! this.state.enabledSlidersPRICE}
                min={0}
                max={5}
                onChange={(value) => {
                  this._updateSliderPrice (value)
                }}
                onComplete={(value) => {
                  //console.log("COMPLETE", value);
                }}
                width={ this.sliderWidth}
                height={ this.sliderHeight}
                step={1}
                borderRadius={150}
                minimumTrackTintColor={this.state.colorPrice}
                maximumTrackTintColor={color.colorBackItem}
                showBallIndicator
                ballIndicatorColor={this.state.colorPrice}
                ballIndicatorTextColor={color.colorBackItem}
                ballIndicatorWidth = {this.sliderBallIndicatorWidth}
                ballIndicatorPosition = {this.sliderBallIndicatorPosition}
              />
            </View>
            <View style = {styles.container}>
              <VerticalSlider
                value={this.state.alcool}
                disabled={! this.state.enabledSlidersABV}
                min={0}
                max={13}
                onChange={(value) => {
                  this._updateSliderAlcool(value)
                }}
                onComplete={(value) => {

                }}
                width={ this.sliderWidth}
                height={ this.sliderHeight}
                step={1}
                borderRadius={150}
                minimumTrackTintColor={this.state.colorAbv}
                maximumTrackTintColor={color.colorBackItem}
                showBallIndicator
                ballIndicatorColor={this.state.colorAbv}
                ballIndicatorTextColor={color.colorBackItem}
                ballIndicatorWidth = {this.sliderBallIndicatorWidth}
                ballIndicatorPosition = {this.sliderBallIndicatorPosition}
              />
            </View>
          </View>
          <View style = {styles.description_slider}>
            <Switch
              value={ this.state.enabledSlidersIBU }
              disabled= {this.state.disabledSwitchIBU}
              onValueChange={(val) => this._disableSliderIBU(val, 1)}
              circleSize={40}
              barHeight={10}
              circleBorderWidth={0}
              backgroundActive={color.colorIbu}
              backgroundInactive={'gray'}
              circleActiveColor={color.colorIbu}
              circleInActiveColor={color.colorDisabled}
              renderInsideCircle={() => 
                <Image 
                  source = {require ('../Images/ic_hop.png')}
                  style = {{ resizeMode: "contain", width: 30, height: 30 }}

                />
              }
              changeValueImmediately={true}

            />
            <Switch
              value={ this.state.enabledSlidersPRICE}
              onValueChange={(val) => this._disableSliderPrice(val, 2)}
              disabled= {this.state.disabledSwitchPRICE}
              circleSize={40}
              barHeight={10}
              circleBorderWidth={0}
              backgroundActive={color.colorPrice}
              backgroundInactive={'gray'}
              circleActiveColor={color.colorPrice}
              circleInActiveColor={color.colorDisabled}
              renderInsideCircle={() => 
                <Image 
                  source = {require ('../Images/ic_euro.png')}
                  style = {{ resizeMode: "contain", width: 30, height: 30 }}

                />
              }
              changeValueImmediately={false}

            />
            <Switch
              value={ this.state.enabledSlidersABV}
              onValueChange={(val) => this._disableSliderABV(val, 3)}
              disabled= {this.state.disabledSwitchABV}
              circleSize={40}
              barHeight={10}
              circleBorderWidth={0}
              backgroundActive={color.colorAlcool}
              backgroundInactive={'gray'}
              circleActiveColor={color.colorAlcool}
              circleInActiveColor={color.colorDisabled}
              renderInsideCircle={() => 
                <Image 
                  source = {require ('../Images/ic_alcohol.png')}
                  style = {{ resizeMode: "contain", width: 30, height: 30 }}

                />
              }
              changeValueImmediately={true}

            />

          </View>
          <View style = { styles.buttonBuyView }>
            <Button
              titleStyle = { styles.buttonBuyText }
              buttonStyle = { styles.buttonBuyStyle }
              onPress = {() => this._displayRatioSearchBeer()}
              iconRight = {true}
              title = "Rechercher"
              icon = {
                <Icon
                  name = 'search'
                  size = {30}
                  color = {color.colorBackground}
                />
              }
              
            />
          </View>
        </Card>
      </SafeAreaView>

    )
  }
}




const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: color.colorBottomTabBackground
  },
  container_slider: {
    justifyContent: "space-evenly",
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
  },
  container: {
    flex: 1,
    marginHorizontal: 60,
    marginBottom: 60,
    marginTop: 10,
  },
  description_slider: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 40,
  },
  buttonBuyView: {
  },  
  buttonBuyStyle: {
    borderRadius: 100,
    width: 250,
    alignSelf: "center",
    backgroundColor: color.colorDivider
  },
  buttonBuyText: {
    color: color.colorBackground,
    marginRight: 10,
    fontFamily: 'MPLUSRounded1c-Bold',
  },
  buttonBuyIon: {

  }, 
  tooltipHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  imageTooltip: {
    width: 30,
    height: 30,
    marginTop: -5,
  },
  icon: {
    marginLeft: 8,
  },
  image: {
    width: 40,
    height: 40,
  },
  card: {
    backgroundColor: color.colorBackground,
    borderColor: color.colorDivider,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4, 
    elevation: 20,
    marginBottom: 10,
    justifyContent: "space-evenly",
    flex: 1,
  },
  cardDivider:{
    backgroundColor: color.colorDivider,
    opacity: 100,
    height: 3,
  },
  cardTitle: {
    color: color.colorDivider,
    fontFamily: 'MPLUSRounded1c-Bold',
    fontWeight: "400"

  },
})
export default RatioBeer
