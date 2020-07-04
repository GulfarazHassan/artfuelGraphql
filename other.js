// import React from "react";
// import { Container, Header, Content, Accordion } from "native-base";
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from "react-native";
// import { Query } from "react-apollo";
// import gql from "graphql-tag";

// const dataArray = [
//   { title: "First Element", content: "Lorem ipsum dolor sit amet" },
//   { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
//   { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
// ];
// const _renderHeader = (item, expanded) => {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         padding: 10,
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "#A9DAD6",
//       }}>
//       <Text style={{ fontWeight: "400" }}> {item.title}</Text>
//     </View>
//   );
// };

// const _renderContent = (item) => {
//   return (
//     <Text
//       style={{
//         backgroundColor: "#e3f1f1",
//         padding: 10,
//         fontStyle: "italic",
//       }}>
//       {item.content}
//     </Text>
//   );
// };
// const query1 = gql`
//   {
//     posts {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `;
// const Courses = () => (
//   // <Query query={query1}>
//   //   {({ loading, error, data }) => {
//   //     if (loading) console.log("Data .......ww :: ", data);
//   //     console.log("Data ...s.... :: ");
//   //     if (error) console.log("Error .......ww :: ", error);
//   //     //   return data.allCourses.map(
//   //     //     ({ id, title, author, description, lo topic, url }) => (
//   //     //       <div key={id}>
//   //     //         <p>{`${title} by ${author}`}</p>
//   //     //       </div>
//   //     //     )
//   //     //   );
//   //     console.log("data ...", data);
//   //     return (
//   //       <Container>
//   //         <Content padder>
//   //           <Accordion
//   //             dataArray={dataArray}
//   //             animation={true}
//   //             expanded={true}
//   //             renderHeader={_renderHeader}
//   //             renderContent={_renderContent}
//   //           />
//   //         </Content>
//   //       </Container>
//   //     );
//   //   }}
//   // </Query>
//   <Query
//     query={gql`
//       {
//         users {
//           edges {
//             node {
//               id
//             }
//           }
//         }
//       }
//     `}>
//     {({ loading, error, data }) => {
//       if (loading) return <Text>Loading...</Text>;
//       if (error) return <Text>Error :(</Text>;
//       console.log("Data ....... :: ", data);
//       //   return data.allCourses.map(
//       //     ({ id, title, author, description, topic, url }) => (
//       //       <div key={id}>
//       //         <p>{`${title} by ${author}`}</p>
//       //       </div>
//       //     )
//       //   );
//       return <Text>Data fetched</Text>;
//     }}
//   </Query>
// );
// export default Courses;
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
const Courses = () => (
  <Query
    query={gql`
      query MyQuery {
        posts {
          edges {
            node {
              id
            }
          }
        }
      }
    `}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) console.log("errorrr :: ", error);
      console.log("Data ....... :: ", data);
      //   return data.allCourses.map(
      //     ({ id, title, author, description, topic, url }) => (
      //       <div key={id}>
      //         <p>{`${title} by ${author}`}</p>
      //       </div>
      //     )
      //   );
      return <Text>Data fetched</Text>;
    }}
  </Query>
);
export default Courses;
