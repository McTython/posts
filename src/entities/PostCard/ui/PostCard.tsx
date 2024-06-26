import { LikeOutlined, DislikeOutlined, EyeOutlined } from "@ant-design/icons";
import { IPostCard } from "./interfaces/IPostCard";

const PostCard = ({ post }: IPostCard): React.ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        width: "60%",
        padding: "15px 20px",
        backgroundColor: "#3F3351",
        color: "#fff",
        borderRadius: "5px",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div>
          <img
            src={
              "https://thetreeparty.nl/wp-content/uploads/2018/05/avatar-placeholder.png"
            }
            width={40}
          />
        </div>
        <div>{post.userName}</div>
      </div>
      <div>{post.title}</div>
      <div style={{ textAlign: "justify" }}>{post.body}</div>
      <div style={{ display: "flex", gap: "10px" }}>
        {post.tags.map((tag) => (
          <button
            key={tag}
            type="button"
            style={{
              background: "#864879",
              padding: "2px 15px",
              borderRadius: "15px",
              border: "none",
              outline: "none",
              color: "#fff",
              fontFamily: "Roboto",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "space-between",
          fontSize: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "20px",
              gap: "4px",
            }}
          >
            <button
              type="button"
              style={{
                border: "none",
                outline: "none",
                background: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              <LikeOutlined style={{ color: "#fff" }} />
            </button>
            {post.reactions.likes}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "20px",
              }}
            >
              <button
                type="button"
                style={{
                  border: "none",
                  outline: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                <DislikeOutlined style={{ color: "#fff" }} />
              </button>
            </div>
            {post.reactions.dislikes}
          </div>
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          <EyeOutlined style={{ color: "#fff" }} />
          {post.views}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
