import React from 'react';
import {View, Text, FlatList} from 'react-native';

const people = [
    {
        id:1,
        name: 'a',
        age: 20
    },{
        id:2,
        name: 'b',
        age: 30
    },{
        id:3,
        name: 'c',
        age: 40
    },{
        id:4,
        name: 'd',
        age: 33
    }
];

const ListScreen = () => {
    return (
    <View>
        {
            //data.map( (item, index) => <Text style={styles.listItem} key={index}>{item.id} - {item.name}</Text> )
        }
        <FlatList 
            data={people} 
            renderItem={ ( element ) => 
                <Text key={element.index}>{element.item.name}</Text> 
                } />
    </View>
    )
};



export default ListScreen;