import * as React from "react"
import {Text, View, StyleSheet, Image} from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"


export default class PostCard extends React.Component{ 

    render() {
         return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}> 
                        <View style={styles.AuthorImageContainerContainer}>
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            ></Image>
                        </View>
                        <View style={styles.authorNameContainerContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                        <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                        <View style={styles.captionContainer}>
                            <Text style={styles.captionText}>
                                {this.props.post.caption}
                            </Text>
                        </View>
                        <View styles={styles.actionContainer}>
                        <View styles={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color = {"white"} />
                            <Text style = {styles.likeText}>12k</Text>
                            </View>
                            </View>
                            </View>
                            </View>
                            </View>
                            


            )

}

}

const styles = StyleSheet.create({
     container: { flex: 1 }, 
     cardContainer: { margin: RFValue(13), backgroundColor: "#2a2a2a", borderRadius: RFValue(20), padding: RFValue(20) },
    authorContainer: { flex: 0.1, flexDirection: "row" }, 
    authorImageContainer: { flex: 0.15, justifyContent: "center", alignItems: "center"}
})