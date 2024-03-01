import { StyleSheet,TextInput, Text, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import styles from './signin.style'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { COLORS, SIZES } from '../../constants/theme'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { HeightSpacer, ResuableBtn, WidthSpacer } from '../../components'

const validationSchema=Yup.object().shape({
  password:Yup.string()
  .min(8,"Password must be 8 charcters")
  .required('Required'),
  email:Yup.string()
  .email('Provide a valid email')
  .required('Reuired')
})

const Signin = () => {
  const[loader,setLoader]=useState(false)
  const[responseData,setResponseData]=useState(null)
  const[obsecureText,setObsecureText]=useState(null)

  return (
    <View style={styles.container}>
      
      <Formik
      initialValues={{email:'',password:''}}
      validationSchema={validationSchema}
      onSubmit={(value)=>{
        
      }}
      
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched
        })=>(
          <View>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Email</Text>
           <View>
           <View style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.gray)}>
            <MaterialCommunityIcons
            name='email-outline'
            size={20}
            color={COLORS.gray}
            />
            <WidthSpacer width={10}/>
            <TextInput
            placeholder='Enter email'
            onFocus={()=>setFieldTouched('email')}
            onBlur={()=>setFieldTouched('email','')}
            value={values.email}
            onChangeText={handleChange('email')}
            autoCapitalize='none'
            autoCorrect={false}
            style={{flex:1}}
            />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}
           </View>

          </View>

          <View style={styles.wrapper}>
            <Text style={styles.label}>Password</Text>
           <View>
           <View style={styles.inputWrapper(touched.password ? COLORS.lightBlue : COLORS.gray)}>
            <MaterialCommunityIcons
            name='lock-outline'
            size={20}
            color={COLORS.gray}
            />
            <WidthSpacer width={10}/>
            <TextInput
            secureTextEntry={obsecureText}
            placeholder='Enter password'
            onFocus={()=>setFieldTouched('password')}
            onBlur={()=>setFieldTouched('password','')}
            value={values.password}
            onChangeText={handleChange('password')}
            autoCapitalize='none'
            autoCorrect={false}
            style={{flex:1}}
            />
            <TouchableOpacity onPress={()=>{
              setObsecureText(!obsecureText)
            }}>
              <MaterialCommunityIcons
              name={obsecureText ? 'eye-outline' :'eye-off-outline'}
              size={18}

              />
            </TouchableOpacity>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}
           </View>

          </View>
          <HeightSpacer height={20}/>
          <ResuableBtn
              onPress={()=>{handleSubmit}}
              btnText={"Sign In"}
              width={SIZES.width-40}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
        
          />
          </View>
        )}
      
      </Formik>
    </View>
  )
}

export default Signin

