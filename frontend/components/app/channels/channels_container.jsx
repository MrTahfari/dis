import { connect } from 'react-redux';
import Channels from './channels';
import { fetchChannels, createChannel, removeChannelErrors, deleteChannel } from '../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { logout, editUser } from '../../../actions/session_actions';
import { deleteServer } from '../../../actions/server_actions';
import { fetchFriends, fetchFriendRequests } from '../../../actions/friends_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    server: state.entities.servers[ownProps.match.params.serverId] || {},
    channels: Object.values(state.entities.channels),
    errors: state.errors.channel,
    // sessionErrors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: serverId => dispatch(fetchChannels(serverId)),
    createChannel: channel => dispatch(createChannel(channel)),
    // logout: () => dispatch(logout()),
    removeChannelErrors: () => dispatch(removeChannelErrors()),
    deleteServer: id => dispatch(deleteServer(id)),
    fetchFriends: () => dispatch(fetchFriends()),
    fetchFriendRequests: () => dispatch(fetchFriendRequests()),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    // editUser: formData => dispatch(editUser(formData)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channels));
