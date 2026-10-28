import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component {
    render(){
        return(
            <ScrollView>
                <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"grey"} poster={require("./img/doctor-sleep.jpg")} />
                <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"green"} poster={require("./img/midway.jpg")} />
                <Movie title={"SpiderMan"} year={2026} icon_name={"spider"} icon_color={"black"} poster={{uri: "https://i.pinimg.com/originals/2d/5d/0e/2d5d0e295fc6508e9037d922fc7c70e3.png"}} />
            </ScrollView>
        );
    };
};

export default AllMovies;