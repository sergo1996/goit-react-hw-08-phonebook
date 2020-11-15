import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contactsActions'
import styles from './Filter.module.css'
import contactsSelectors from '../../redux/contacts/contactsSelectors'

const Filter = ({value, onChangeFilter}) =>(
    <div className={styles.filterContainer}>
    <label className={styles.filterName} htmlFor='filter'>Find contacts by name</label>
    <input
    className={styles.filterField}
    type='text'
    value={value}
    onChange={e=> onChangeFilter(e.target.value)}
    id='filter'/>
    </div>
)

const mapStateToProps = (state) =>({
    value: contactsSelectors.getFilter(state)
})

const mapDispatchToProps = {
    onChangeFilter: contactsActions.changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)


Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func
}