import React from "react";
import Card from "../../components/Card";
import InputBox from "../../components/InputBox";

class Home extends React.Component {
  state = {
    comment: "",
    models: []
  };

  addList = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      models: [
        ...this.state.models,
        {
          userImage:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhESEhIWFRUWGBUVFxUYFhYZFRIYFRUWFxcYFRcYHSggGRomHxYVITEhJSorLi46FyAzODcwNygtMSsBCgoKDg0OGhAQGyslHyUvLSsvLysuKzAtLTUuLS0tLTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS04LS0tLf/AABEIAOUA3AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCCAH/xABHEAACAgECAwUEBAsFBgcAAAABAgADEQQSBSExBhNBUWEHIjJxFGKBlBUWIzNCUlSRodLTU4KDkrEkQ3OTwdE0Y2RyorPx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EACkRAQACAgEEAQMEAwEAAAAAAAABAgMRIQQSMVFBEzJhBRQioYGRsUL/2gAMAwEAAhEDEQA/AO2RETisREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQESmcR7cD6PTqdMhdPpIpvV1Isrr2OzMAPHARh1DAjzmx2d43Y2s1mntdXXeWoIAGEC1M1Zx8WFupcHx7w+UnRta4iJAREQEREBERAREQEw6zVJUjWWMFRRlmPgJmlf7Rrvv0NTfAbHtI8HamstWp+TEP/AIUmIJnTF9J112XQ16VOexba2ttccsGwLYgr8fdBY9MkHIElwHiZuRw6hba3aq1QcgOoBBXx2srI4z4OM88zJI7gnPW64r8IXTA/8TZYWz67DR/CWnWlItMysEREouREEwESr8c9oXDdISLdXWWHIpXmxwfIhM7T88Soar276FSQlGof1wig/vcmTqTbq8TkNft70v6WkvA9GrP+pEsHBva/wy8gNa1BPhchA+11yo+0ye2Ta/RMGk1ldqh6nV0PRlIZT8iOUzyEkREhDml3CrQ1y0qXevUKrpkDKd+ur01o3EAhA71HzXd12ATd1PBRoUbULZlKLqrkUjb3NCKabUJHxgUuwGfCtBzxmWLjHDLe+TU6YIbAndWI7FUur3Fl98KxV0JYg4Iw7g9QRDcb4h3lZptQ1Ot2j71CQwaqzVVjcrDk1ZwV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",
          userName: "신짱구",
          mainImage:
            "https://pbs.twimg.com/profile_images/953970479680839680/j84_426t_400x400.jpg",
          likeCount: "31,105",
          comment: this.state.comment,
          reply: "107"
        }
      ],
      comment: ""
    });
  };

  modelElements = () =>
    this.state.models.map((card, index) => (
      <Card
        userImage={card.userImage}
        userName={card.userName}
        mainImage={card.mainImage}
        likeCount={card.likeCount}
        comment={card.comment}
        reply={card.reply}
        key={index}
      />
    ));

  onChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <div>
        <InputBox
          onChange={this.onChange}
          onSubmit={this.addList}
          comment={this.state.comment}
        />
        {this.modelElements()}
      </div>
    );
  }
}

export default Home;
