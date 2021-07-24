import { XBanner, XRow, XSpinner } from "@hgiasac/quasar-wrapper";
import { useGetExamplesQuery } from "src/api/graphql/generated/controller-types";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { fetching, data, error } = useGetExamplesQuery({
      variables: {
        where: {},
      },
    });

    return () => {
      if (fetching.value) {
        return (
          <XRow style={{ height: "90vh" }} alignment="center" justify="center">
            <XSpinner color="primary" size="3rem" thickness={2} />
          </XRow>
        );
      }

      if (error.value) {
        return <XBanner class="bg-negative">{error.value.message}</XBanner>;
      }

      return <div class="q-ma-md">{JSON.stringify(data.value)}</div>;
    };
  },
});
