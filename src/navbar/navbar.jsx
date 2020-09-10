import React from 'react';

// navbar uses bootstrap navbar template
class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img
                        src="https://www.nicepng.com/png/detail/187-1870373_44191585-markdown-logo.png"
                        width="30" height="30" class="d-inline-block align-top" alt="" />
                &nbsp;&nbsp;&nbsp; Markdown Previewer
            </a>
                <span class="navbar-text">
                    You'll never see a better markdown previewer
          </span>
            </nav>
        )
    }
}
export default Navbar;