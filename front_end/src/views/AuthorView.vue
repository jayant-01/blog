<script setup>
import PostList from "../components/PostList.vue";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const route = useRoute();
const username = route.params.username;
const { result, loading, error } = useQuery(gql`
  query {
    authorByUsername(
      username: "${username}"
    ) {
        website
        bio
        user {
          firstName
          lastName
          username
        }
        postSet {
          title
          slug
        }
      }
  }
`);
</script>

<!-- ... -->