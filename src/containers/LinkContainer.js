import { connect } from "react-redux"
import { setVisibilityFilter } from "../redux/visibilityFilter"
import Link from "../components/Link"

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default LinkContainer