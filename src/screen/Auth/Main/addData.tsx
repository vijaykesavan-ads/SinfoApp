import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
  Platform,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton, TextInput } from 'react-native-paper';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AddData() {
  const navigation = useNavigation()
  const route = useRoute();
  const Location = route?.params?.selectedLocation
  console.log("route----.>", route);
  console.log("Location----.>", Location);

  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState('6');
  const [section, setSection] = useState('A');
  const [school, setSchool] = useState('');
  const [gender, setGender] = useState('Male');
  const [bloodGroup, setBloodGroup] = useState('');
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [contact, setContact] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [locationAdded, setLocationAdded] = useState(false);
  const [dob, setDob] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  console.log("locationAdded---->", locationAdded);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate);
      setDob(format(selectedDate, 'dd/MM/yyyy'));
    }
    setShowPicker(false);
  };
  const handleCameraCapture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Camera Permission Denied', 'Camera access is required to take a photo.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit1 = () => {
    console.log("photo--->", photo);
    console.log("name--->", name);
    console.log('Location--->', Location);

    if (!photo || !name || !Location) {
      alert('Please fill in all mandatory fields (Photo, Name, Location)');
      return;
    }
    alert('Submitted!');
  };

  const handleSubmit = () => {
    if (!photo || !name || !Location) {
      alert('Please fill in all mandatory fields (Photo, Name, Location)');
      return;
    }

    Alert.alert(
      'Success',
      'Submitted!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('ViewData'), // 👈 Navigate to Home screen here
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Add Data</Text>
      </View>
      <ScrollView>
        <TouchableOpacity style={styles.uploadBox} onPress={handleCameraCapture}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.photo} />
          ) : (
            <>
              <Ionicons name="camera-outline" size={40} color="#004d4d" />
            </>
          )}
        </TouchableOpacity>

        <View style={styles.form}>
          <TextInput label="Name" style={styles.input} outlineColor='#66A5AD' activeOutlineColor='#66A5AD' value={name} onChangeText={setName} mode='outlined' />

          <View style={styles.row}>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedClass}
                onValueChange={setSelectedClass}
                style={styles.picker}
              >
                {['1', '2', '3', '4', '5', '6'].map((item) => (
                  <Picker.Item label={item} value={item} key={item} />
                ))}
              </Picker>
            </View>

            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={section}
                onValueChange={setSection}
                style={styles.picker}
              >
                {['A', 'B', 'C'].map((item) => (
                  <Picker.Item label={item} value={item} key={item} />
                ))}
              </Picker>
            </View>
          </View>


          <TextInput label="School name" mode='outlined' outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} value={school} onChangeText={setSchool} />

          <View style={styles.genderRow}>
            <Text style={styles.label}>Gender:</Text>

            {['Male', 'Female'].map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setGender(item)}
                style={styles.genderOption}
              >
                <Text style={[styles.genderText, gender === item && styles.genderTextSelected]}>
                  {item}
                </Text>
                <View style={styles.radioOuter}>
                  {gender === item && <View style={styles.radioInner} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <Pressable onPress={() => setShowPicker(true)}>
            <TextInput
              label="DOB"
              value={dob || '--/--/----'}
              mode="outlined"
              editable={false}
              outlineColor="#66A5AD"
              activeOutlineColor="#66A5AD"
              right={
                <TextInput.Icon
                  icon="calendar"
                  color="#66A5AD"
                  onPress={() => setShowPicker(true)}
                />
              }
              style={{ marginBottom: 10 }}
            />
          </Pressable>

          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              maximumDate={new Date()}
              onChange={onChange}
            />
          )}

          <TextInput label="Blood Group" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} value={bloodGroup} onChangeText={setBloodGroup} mode='outlined' />
          <TextInput label="Father's name" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} value={father} onChangeText={setFather} mode='outlined' />
          <TextInput label="Mother's name" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} value={mother} onChangeText={setMother} mode='outlined' />
          <TextInput label="Parent's contact no" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} keyboardType="phone-pad" value={contact} mode='outlined' onChangeText={setContact} />
          <TextInput label="Address 1" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} value={address1} onChangeText={setAddress1} mode='outlined' />
          <TextInput label="Address 2" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} value={address2} onChangeText={setAddress2} mode='outlined' />
          <TextInput label="City" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} value={city} onChangeText={setCity} mode='outlined' />
          <TextInput label="State" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} value={state} onChangeText={setState} mode='outlined' />
          <TextInput label="Zip" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} keyboardType="number-pad" value={zip} onChangeText={setZip} mode='outlined' />
          <TextInput label="Emergency contact no" outlineColor='#66A5AD' activeOutlineColor='#66A5AD' style={styles.input} keyboardType="phone-pad" value={emergencyContact} mode='outlined' onChangeText={setEmergencyContact} />

          <TouchableOpacity
            style={styles.locationRow}
            onPress={() => navigation.navigate('mapSelect')}
          >
            <Ionicons name="location-outline" size={24} color="#004d4d" />
            <Text style={styles.locationText}>
              {locationAdded ? { Location } : 'Click here to add the location'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: {
    backgroundColor: '#004d4d',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  uploadBox: {
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: '#e0f7f7',
    position: 'relative',
  },
  uploadText: {
    fontSize: 12,
    marginTop: 4,
    color: '#004d4d',
  },
  photo: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  form: { padding: 16 },
  input: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  picker: {
    flex: 1,
  },
  pickerWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#66A5AD',
    overflow: 'hidden',
    marginBottom: 10,
  },
  genderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    gap: 10,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  genderText: {
    fontSize: 16,
    color: '#00575a',
    fontWeight: 'bold',
  },
  genderTextSelected: {
    color: '#004949',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#004949',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#004949',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioLabel: {
    fontSize: 16,
  },
  label: { fontSize: 14, fontWeight: 'bold' },
  gender: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#e0f7f7',
    borderRadius: 20,
  },
  selectedGender: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#004d4d',
    borderRadius: 20,
    color: '#fff',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#66A5AD',
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
    gap: 10,
    marginBottom: 16,
  },
  locationText: { flex: 1, color: '#004d4d' },
  submitBtn: {
    backgroundColor: '#004d4d',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: { color: '#fff', fontWeight: 'bold' },
});
