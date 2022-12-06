import React from "react";
import messageHoc from './Hoc';
const example1 = (props: any) => <p>{props.prop1}<br />{props.prop2}</p>
const Message1 = messageHoc(example1);
export default Message1;