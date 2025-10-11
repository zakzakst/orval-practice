import { Input } from "@/components/ui/input";

export const Form = () => {
  return (
    <div>
      {/* 展示会名 */}
      <Input name="展示会名" />
      {/* 会期(開始) */}
      {/* 開始曜日 */}
      {/* 会期(終了) */}
      {/* 終了曜日 */}
      {/* 利用施設 */}
      <Input name="利用施設" />
      {/* 開催時間 */}
      {/* 最終日の終了時刻(●:30分前に終了　▲:1時間前に終了　■:2時間前に終了) */}
      {/* 来場対象者 */}
      {/* 入場料について */}
      {/* 内容 */}
      <Input name="内容" />
      {/* 連絡先 */}
      <Input name="連絡先" />
      {/* TEL */}
      <Input name="TEL" />
      {/* URL */}
      <Input name="URL" />
    </div>
  );
};
