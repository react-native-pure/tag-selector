# tag-selector

tag选择器

## Install

```
$ npm i --save @react-native-pure/tag-selector
```

<!--begin react doc markdown-->
# TagSelector


Tag选择器

## props

- `value?` **Array** 
- `onChange?` **signature** 
- `style?` **any** 
- `renderTag` **signature** 
- `dataSource` **Array** 
- `keyExtractor` **signature** 


## Examples

```javascript
class Test extends React.Component{
    state={
        value:[],
        dataSource:[1,2,3]
    };

    render(){
        return (
            <TagSelector value={this.state.value}
                         renderTag={(value,index,selected)=>{
                             return <Text key={index} style={{color:selected?"red":"blue"}}>{value}</Text>
                         }}
                         onChange={(type,value)=>{
                             if(type==="select"){
                                 this.setState({
                                     value:[...this.state.value,value]
                                 })
                             }
                             if(type==="unselect"){
                                 this.setState({
                                     value:this.state.value.filter(f=>f!==value)
                                 });
                             }
                         }}
                         dataSource={this.state.dataSource}
                         keyExtractor={(value)=>value}/>
        );
    }
}
```

<!--end react doc markdown-->