import { connect } from "react-redux"
import { setVisibilityFilter } from "../redux/visibilityFilter"
import LinkTest from "../components/LinkTest"

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
)(LinkTest)

export default LinkContainer
