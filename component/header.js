import * as React from 'react';
import {Header} from 'react-native-elements';

 const MyHeader = props=>{
    return(
        <Header
        backgroundColor="#EBF6FB"
        centerComponent={{
            text:props.title,
            style:{color: '#90A5A9', fontSize:20,fontWeight:"bold"}
        }

        }
        />
    )
}

export default MyHeader;