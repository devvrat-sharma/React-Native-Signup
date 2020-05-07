import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class AddEvent extends Component {

    constructor(props) {
        super(props);
        //     var { height, width } = Dimensions.get('window');
        this.state = {
            // screenHeight: height, screenWidth: width,
            staffId: '',
            password: '',
            mode: "date",
            date: new Date(1598051730000),
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            setDatePickerVisibility: false
        };
    }

    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true })
    }

    showTimePicker = () => {
        this.setState({ isTimePickerVisible:  true})
    }

    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false, isTimePickerVisible: false })
    }

    handleConfirm = () => {
        console.warn("A date has been picked: ", date);
        this.hideDatePicker();
    }

    componentDidMount() { }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.labelRow}>
                    <View style={styles.labelRowRight}>
                        <Image
                            style={styles.inputIcon}
                            source={require('../assets/contactIcon.png')}
                        />
                        <Text style={styles.labelText}>Add Title</Text>
                    </View>
                    <View style={styles.labelRowRight}>
                        <Text style={styles.subtitleText}>Max: 50 characters</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.titleInput}
                    underlineColorAndroid="transparent"
                />
                <View style={styles.labelRow}>
                    <View style={styles.labelRowRight}>
                        <Image
                            style={styles.inputIcon}
                            source={require('../assets/contactIcon.png')}
                        />
                        <Text style={styles.labelText}>Add Description</Text>
                    </View>
                    <View style={styles.labelRowRight}>
                        <Text style={styles.subtitleText}>Max: 120 characters</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.descriptionInput}
                    underlineColorAndroid="transparent"
                />
                <View style={styles.labelRow}>
                    <View style={styles.labelRowRight}>
                        <Image
                            style={styles.inputIcon}
                            source={require('../assets/contactIcon.png')}
                        />
                        <Text style={styles.labelText}>Add Location</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.locationInput}
                    underlineColorAndroid="transparent"
                />
                <View style={styles.datePickerContainer}>
                    <View style={styles.dateContainer}>
                        <View style={styles.labelRowRight}>
                            <Image
                                style={styles.inputIcon}
                                source={require('../assets/contactIcon.png')}
                            />
                            <Text style={styles.labelText}>Date</Text>
                        </View>
                        <TouchableOpacity style={styles.dateButton} onPress={this.showDatePicker}><Text style={styles.dateText}>07/05/2020</Text></TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={this.state.isDatePickerVisible}
                            mode="date"
                            onConfirm={this.handleConfirm}
                            onCancel={this.hideDatePicker}
                        />
                    </View>
                    <View style={styles.dateContainer}>
                        <View style={styles.labelRowRight}>
                            <Image
                                style={styles.inputIcon}
                                source={require('../assets/contactIcon.png')}
                            />
                            <Text style={styles.labelText}>Time</Text>
                        </View>
                        <TouchableOpacity style={styles.dateButton} onPress={this.showTimePicker}><Text style={styles.dateText}>7:30 AM</Text></TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={this.state.isTimePickerVisible}
                            mode="time"
                            onConfirm={this.handleConfirm}
                            onCancel={this.hideDatePicker}
                        />
                    </View>

                </View>
                <View style={styles.labelRow}>
                    <View style={styles.labelRowRight}>
                        <Image
                            style={styles.inputIcon}
                            source={require('../assets/contactIcon.png')}
                        />
                        <Text style={styles.labelText}>Add Google Map</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.titleInput}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 10
    },
    labelRow: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
        // backgroundColor: "red",
        // flex: 1
    },
    labelRowRight: {
        flexDirection: "row",
        alignItems: "center"
    },
    inputIcon: {
        width: 25,
        height: 25,
        // marginRight: 15,
        justifyContent: "center",
        color: '#FF0018'
    },
    labelText: {
        marginLeft: 10,
        color: "red",
        fontSize: 16
    },
    subtitleText: {
        color: "grey",
    },
    titleInput: {
        backgroundColor: "#fff",
        height: 80,
        marginTop: 15,
        borderBottomColor: "#FFFFFF",
        // flex: 1
    },
    descriptionInput: {
        backgroundColor: "#fff",
        height: 130,
        marginTop: 15,
        borderBottomColor: "#FFFFFF",
    },
    locationInput: {
        backgroundColor: "#fff",
        height: 50,
        marginTop: 15,
        borderBottomColor: "#FFFFFF",
    },
    datePickerContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dateButton: {
        width: 130,
        height: 50,
        backgroundColor: "#fff",
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    dateText: {
        fontSize: 16,
        color: "grey"
    }
})