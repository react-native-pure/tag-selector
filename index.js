import * as React from "react"
import {View, TouchableOpacity, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    defaultTagView: {
        flexDirection: "row"
    }
})

const TagActions = {
    select: "select",
    unselect: "unselect"
};

type TagSelectorProps = {
    value?: Array<mixed>,
    onChange?: (type: $Values<typeof TagActions>, item: mixed, index: number) => void,
    style?: any,
    renderTag: (item: mixed, index: number, selected: boolean) => React.Element<*>,
    dataSource: Array<*>,
    keyExtractor: (item: mixed, index: number) => string
};

/**
 * Tag选择器
 *
 * @example
 *
 * class Test extends React.Component{
 *     state={
 *         value:[],
 *         dataSource:[1,2,3]
 *     };
 *
 *     render(){
 *         return (
 *             <TagSelector value={this.state.value}
 *                          renderTag={(value,index,selected)=>{
 *                              return <Text key={index} style={{color:selected?"red":"blue"}}>{value}</Text>
 *                          }}
 *                          onChange={(type,value)=>{
 *                              if(type==="select"){
 *                                  this.setState({
 *                                      value:[...this.state.value,value]
 *                                  })
 *                              }
 *                              if(type==="unselect"){
 *                                  this.setState({
 *                                      value:this.state.value.filter(f=>f!==value)
 *                                  });
 *                              }
 *                          }}
 *                          dataSource={this.state.dataSource}
 *                          keyExtractor={(value)=>value}/>
 *         );
 *     }
 * }
 *
 */
function TagSelector(props: TagSelectorProps) {
    const selectedKeys = props.value.map(props.keyExtractor);
    return (
        <View style={[styles.defaultTagView, props.style]}>
            {props.dataSource.map((item, index) => {
                const key = props.keyExtractor(item, index);
                const selected = selectedKeys.indexOf(key) >= 0;
                return (
                    <TouchableOpacity key={key}
                                      onPress={() => {
                                          props.onChange(selected ? TagActions.unselect : TagActions.select, item, index);
                                      }}>
                        {props.renderTag(item, index, selected)}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

TagSelector.defaultProps = {
    value: [],
    onChange: ()=>null
};

export default React.memo(TagSelector);

