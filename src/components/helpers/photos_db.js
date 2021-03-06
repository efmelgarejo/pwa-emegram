import firebase from 'firebase'

export function savePhotoInDB(url, user) {
  firebase.database().ref().child('edgram/photos').push({
    photoURL: url,
    uid: user.uid,
    displayName: user.displayName,
    avatar: user.photoURL
  })
}
