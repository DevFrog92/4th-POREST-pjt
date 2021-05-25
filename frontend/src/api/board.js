import { instanceAuth } from '@/api';

const getBoardList = (pageNumber, pageSize) =>
  instanceAuth.get(
    `/counsel-boards?pageNumber=${pageNumber}&pageSize=${pageSize}`,
  );

const getBoardDetail = counselId =>
  instanceAuth.get(`/counsel-boards/${counselId}`);

const updateDetailStatus = counselId =>
  instanceAuth.put(`/counsel-boards/${counselId}`);

export { getBoardList, getBoardDetail, updateDetailStatus };
