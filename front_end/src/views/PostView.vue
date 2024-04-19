<script setup>
import AuthorLink from "../components/AuthorLink.vue";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "full" });
const displayableDate = (date) => dateFormatter.format(new Date(date));
const route = useRoute();
const slug = route.params.slug;
const { result, loading, error } = useQuery(gql`
  query {
    postBySlug(
      slug: "${slug}"
    ) {
        title
        subtitle
        publishDate
        published
        metaDescription
        slug
        body
        author {
          user {
            username
            firstName
            lastName
          }
        }
        tags {
          name
        }
    }
  }
`);
</script>

<!-- ... -->