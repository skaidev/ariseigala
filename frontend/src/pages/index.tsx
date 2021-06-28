import ArticleLayout from "Layout/ArticleLayout";

export default function Home(): JSX.Element {
  return (
    <ArticleLayout>
      <div className="container">
        <div className="container">
          <button className="btn btn-dark">My button</button>
        </div>

        <div className="div">Hello</div>
      </div>
    </ArticleLayout>
  );
}
