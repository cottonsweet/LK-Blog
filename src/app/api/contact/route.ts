// API
import { sendEmail } from "@/API/email";

// lib
import * as yup from "yup";

export const bodySchema = yup.object().shape({
  email: yup.string().email().required("이메일을 입력해 주세요 !"),
  subject: yup.string().required("제목을 입력해 주세요 !"),
  message: yup.string().required("메세지를 입력해 주세요 !"),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body))
    return new Response(
      JSON.stringify({ message: "메일 전송에 실패 하였습니다." }),
      { status: 400 }
    );

  return sendEmail(body)
    .then(
      () =>
        new Response(
          JSON.stringify({ message: "메일을 성공적으로 보냈습니다." }),
          { status: 200 }
        )
    )
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify({ message: "메일 전송에 실패 하였습니다." }),
        { status: 500 }
      );
    });
}
