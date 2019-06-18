import React from 'react';
import { TotalBoxView, TotalBoxTouch, TotalHeader, TotalContainer, TotalItem} from "./styledComponents";


const CountersTotal = ({total, header, action, platform}) => {

    const TotalBox = (action)? TotalBoxTouch: TotalBoxView;
    const key = header;

    if(action){
        header = `${header.slice(0,19)}hs`;
    }

    
    
    return (
      <TotalContainer>

        <TotalHeader platform={platform} date>{header}</TotalHeader>
        
        <TotalBox platform={platform} onPress={()=> {action(key)}}>
            <TotalItem platform={platform}>{total}</TotalItem> 
        </TotalBox>
        
        

      </TotalContainer>
    );
  
}

export default CountersTotal;
