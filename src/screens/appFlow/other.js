import React from "react";
import { Container, Header, Content, Accordion } from "native-base";
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

const dataArray = [
  {
    title: "First Element",
    content: "Lorem ipsum dolor sit amet",
    author: "name 1",
    date: "02-09-20",
  },
  {
    title: "Second Element",
    content: "Lorem ipsum dolor sit amet",
    author: "name 1",
    date: "02-09-20",
  },
  {
    title: "Third Element",
    content: "Lorem ipsum dolor sit amet",
    author: "name 1",
    date: "02-09-20",
  },
];
const _renderHeader = (item, expanded) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Text style={{ fontWeight: "400" }}> {item.title}</Text>
    </View>
  );
};

const _renderContent = (item) => {
  return (
    <>
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}>
        {item.content}
      </Text>
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}>
        Author : {item.author}
      </Text>
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}>
        Date : {item.date}
      </Text>
    </>
  );
};
const Courses = () => (
  <Query
    query={gql`
      {
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
      if (loading) console.log("Data .......ww :: ");
      console.log("Data ...s.... :: ");
      //   return data.allCourses.map(
      //     ({ id, title, author, description, topic, url }) => (
      //       <div key={id}>
      //         <p>{`${title} by ${author}`}</p>
      //       </div>
      //     )
      //   );
      console.log("data ...", data);
      return (
        <Container>
          <Content padder>
            <Accordion
              dataArray={dataArray}
              animation={true}
              expanded={true}
              renderHeader={_renderHeader}
              renderContent={_renderContent}
            />
          </Content>
        </Container>
      );
    }}
  </Query>
);
export default Courses;
