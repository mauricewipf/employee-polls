import {connect} from "react-redux";

const Nav = (props) => {
    return (
        <ul>
           <li>Dashabord</li>
           <li>.</li>
           <li>.</li>
        </ul>
    );
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Nav);
