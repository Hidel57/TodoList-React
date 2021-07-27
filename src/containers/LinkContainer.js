import { connect } from "react-redux"
import Link from "../components/Link"

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const LinkContainer = connect(
  mapStateToProps,
)(Link)

export default LinkContainer
