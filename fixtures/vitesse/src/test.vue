<script lang="tsx">
import { renderList } from "vue";

const div = (
  <div>
    {

      renderList([1, 2, 3], (item) => {
        return <div>{item}</div>;
      })
    }
  </div>
);

export function testComponent() {
  return (
    <div>

      {
        renderList([1, 2, 3], (item) => {
          return <div>{item}</div>;
        })
      }
    </div>
  );
}
</script>

<template>
  <div>
    <div />
  </div>
</template>
