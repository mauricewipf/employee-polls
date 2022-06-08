import {connect} from "react-redux";

const Leaderboard = ({users}) => {
    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name} <br/>{user.id}</td>
                                <td>{Object.keys(user.answers).length}</td>
                                <td>{user.questions.length}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = ({users}) => ({
    users: Object.values(users),
});

export default connect(mapStateToProps)(Leaderboard);
