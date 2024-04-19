<script setup>
import PostList from "../components/PostList.vue";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const route = useRoute();
const tag = route.params.tag;
const { result, loading, error } = useQuery(gql`
  query {
    postsByTag(
      tag: "${tag}"
    ) {
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