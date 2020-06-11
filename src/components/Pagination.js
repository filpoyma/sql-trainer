import React from 'react'
import { Icon, Pagination } from 'semantic-ui-react'
import { challengeValues } from "../api/chalenge";

const AppPagination = ({activePageHandele, activePage, isLoading}) => (
  <Pagination
    size='mini'
    activePage={activePage}
    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
    prevItem={{ content: <Icon name='angle left' />, icon: true }}
    nextItem={{ content: <Icon name='angle right' />, icon: true }}
    totalPages={challengeValues.length}
    onPageChange={(e, {activePage})=>activePageHandele(activePage)}
    disabled={isLoading}
  />
);
export default AppPagination