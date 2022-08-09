import React, {FC} from 'react'
import './Avatar.props.css'
import {AvatarProps} from './Avatar.props'

const Avatar: FC<AvatarProps> = (props) => <img {...props}/>

export default Avatar