import { UserAvatarProps } from "@/types";
import NextImage from "next/image";

export default function UserAvatar(props: UserAvatarProps) {
  return (
    <>
      <div className="rounded-full w-10">
        {props.user?.imageUrl ? (
          <NextImage alt="User Image Profile" src={props.user?.imageUrl} />
        ) : (
          <div className="avatar online placeholder">
            <div className="bg-neutral rounded-full w-16 text-neutral-content">
              <span className="text-xl">
                {props.user?.username
                  ?.split(/[ ]+/)
                  .map((e: string, i: number) => (i <= 2 ? e : undefined))
                  .filter(Boolean)}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
