<script setup>
import PostList from "../components/PostList.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result, loading, error } = useQuery(gql`
  query {
    allPosts {
      title
      slug
      author {
        user {
          username
          firstName
          lastName
        }
      }
    }
  }
`);
</script>

<!-- ... -->