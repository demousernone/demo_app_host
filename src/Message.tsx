import React from "react";
import messageHoc from './Hoc';
const example =(props:any) =><p>{props.prop1}<br />{props.prop2}</p>
const Message = messageHoc(example);
export default Message;