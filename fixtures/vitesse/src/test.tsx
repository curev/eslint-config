import { renderList } from "vue";

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
