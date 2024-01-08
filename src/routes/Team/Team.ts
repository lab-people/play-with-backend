import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../config/connect";
import { Team } from "../../entities/team.entity";
import {TeamMember} from "../../entities/teamMember.entity";
const teamRepository = AppDataSource.getRepository(Team);
const teamMemberRepository = AppDataSource.getRepository(TeamMember);

/**
 * 팀 초대 승인
 * @param req
 * @param res
 * @param next
 */
export const joinTeam = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
  try {
    const {memberId, teamId} = req.body;
    await addTeamMember(teamId, memberId);

    res.status(200).json({ message: "등록성공", result: {} });
  } catch (error: any) {
    console.error(error.message)
    res.status(500).json({ message: "서버에러", result: error });
  }
};
/**
 * 팀 최초 생성
 * @param req
 * @param res
 * @param next
 */

export const addInitialTeam = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const teamData = req.body;
    const team = new Team();

    team.name = teamData.name;
    team.domain = teamData.domain;
    team.rootEmail = teamData.rootEmail;

    const savedTeam = await teamRepository.save(team);
    await addTeamMember(savedTeam.id, teamData.adminId);

    res.status(200).json({ message: "등록성공", result: {} });
  } catch (error: any) {
    console.error(error.message)
    res.status(500).json({ message: "서버에러", result: error });
  }
};

/**
 * 팀 멤버 생성
 * @param teamId
 * @param memberId
 */
const addTeamMember = async (teamId: number, memberId: number) => {
  const teamMember = new TeamMember();
  teamMember.teamId = teamId;
  teamMember.memberId = memberId;

  await teamMemberRepository.save(teamMember);
}