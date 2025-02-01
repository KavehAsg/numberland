import { Editor } from "@tinymce/tinymce-react";


export default function RichTextEditor({initialContent = "" , editorRef}) {

  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_EDITOR_API_KEY}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={initialContent}
        init={{
          height: 700,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat ",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px , lang:fa_IR; direction:rtl; }",
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}
