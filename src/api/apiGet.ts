import { ChampionData, ChampionsData, ItemData, LeagueOfLegendsCDN } from "../interface";
import { VITE_LOL_URL, apiLol } from "./axios";

export async function getVersion(): Promise<string[]> {
  const { data } = await apiLol({
    method: "GET",
    url: "/api/versions.json",
  });
  return data;
}
export async function getRegion(region: string): Promise<LeagueOfLegendsCDN> {
  const { data } = await apiLol({
    method: "GET",
    url: `/realms/${region}.json`,
  });
  return data;
}
export async function getLanguageCode(): Promise<string[]> {
  const { data } = await apiLol({
    method: "GET",
    url: "/cdn/languages.json",
  });
  return data;
}

export async function getAllChampionData(param: { lang: string; version: string }): Promise<ChampionsData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${param.version}/data/${param.lang}/champion.json`,
  });
  return data;
}
export async function getChampionData(param: { lang: string; version: string; id: string }): Promise<ChampionData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${param.version}/data/${param.lang}/champion/${param.id}.json`,
  });
  return data;
}

export function getChampionLoading(id: string): string {
  return `${VITE_LOL_URL}/cdn/img/champion/loading/${id}_0.jpg`;
}

export function getChampionImg(id: string, version: string): string {
  return `${VITE_LOL_URL}/cdn/${version}/img/champion/${id}`;
}

export function getChampionSpellImg(id: string, version: string): string {
  return `${VITE_LOL_URL}/cdn/${version}/img/spell/${id}`;
}

export function getChampionPassiveImg(id: string, version: string): string {
  return `${VITE_LOL_URL}/cdn/${version}/img/passive/${id}`;
}

export async function getAllItemsData(param: { lang: string; version: string }): Promise<ItemData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${param.version}/data/${param.lang}/item.json`,
  });
  return data;
}

export function getItemImg(id: string, version: string): string {
  return `${VITE_LOL_URL}/cdn/${version}/img/item/${id}`;
}

// export async function getChampionSplash( id: string) {
//   //http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
// }