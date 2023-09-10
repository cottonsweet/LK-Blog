const ITEM_CLASS = "text-center mb-5";
const TITLE_CLASS = "font-bold text-3xl mb-2";

export default function Introduce() {
  return (
    <section className="w-full flex flex-col justify-center items-center rounded-lg shadow-xl bg-gray-100 mt-8 p-8">
      <div className={ITEM_CLASS}>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>프론트엔드 엔지니어</p>
      </div>
      <div className={ITEM_CLASS}>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          HTML, CSS, CSS Module, Sass, Bootstrap, Mui
          <br />
          JavaScript, TypeScript
          <br />
          React
          <br />
          Recoil, Redux-Toolkit
          <br />
          Axios
          <br />
          Emotion, Styled-Components
          <br />
          Vite
          <br />
          NPM, Yarn
          <br />
          AWS(EC2), Vercel, Netlify
        </p>
      </div>
      <div className={ITEM_CLASS}>
        <h2 className={TITLE_CLASS}>Tools</h2>
        <p>
          VS Code, Prettier <br />
          Figma, FigJam <br />
          Git, Github <br />
          Jira, Confluence, Slack, Notion
        </p>
      </div>
    </section>
  );
}
