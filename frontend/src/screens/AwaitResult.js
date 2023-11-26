// import React from 'react';
// import { View, Text } from 'react-native';
// import { Button, LinearProgress } from '@rneui/themed';
// import Header from '../components/Header'
//
// const LinearProgressAPI: React.FunctionComponent = () => {
//     const [progress, setProgress] = React.useState(0);
//
//     React.useEffect(() => {
//         let subs = true;
//         if (progress < 1 && progress !== 0) {
//             setTimeout(() => {
//                 if (subs) {
//                     setProgress(progress + 0.1);
//                 }
//             }, 100);
//         }
//         return () => {
//             subs = false;
//         };
//     }, [progress]);
//
//     return (
//         <View>
//             <View
//                 style={{
//                     margin: 10,
//                     marginVertical: 50,
//                 }}
//             >
//                 <Header>Подождите, ваш запрос обрабатывается...</Header>
//                 <LinearProgress style={{ marginVertical: 10, backgroundColor: '#8BCBB6'}} />
//             </View>
//         </View>
//     );
// };
//
// export default LinearProgressAPI;
