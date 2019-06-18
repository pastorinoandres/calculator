import { createSelector } from 'reselect';


export const getSelectedKey = state => state.counterSelected;
export const getRecords = state => state.counters;
export const getRecordSelect = createSelector(getSelectedKey, getRecords, (selectedKey, records) => records[selectedKey]);
export const getRecordsLength = createSelector(getRecordSelect, record => {return (record)?record.length:undefined});

calcTotal = (record) => {
    return (record)?record.reduce((acum, currentValue) => (acum + currentValue)):undefined;
}

export const getTotal = createSelector( getRecordSelect, calcTotal);

