import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class FavoritePosts extends Component {
  render() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Favori Yazılar - {this.props.favoritePosts.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.favoritePosts.map((postItem) => (
            <DropdownItem key={postItem.post.id}>
              <span
                onClick={() => this.props.removeFromFavorites(postItem.post)}
                className="badge badge-danger"
                style={{ marginRight: "10px" }}
              >
                X
              </span>
              {postItem.post.title}
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Favorileri Boşalt</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
