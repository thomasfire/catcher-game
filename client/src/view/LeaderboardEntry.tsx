import React from "react";

export function LeaderboardEntry({place, name, score}: {place: number, name: string, score: number}) {
    return (
        <tr className=" odd:bg-blue-500 even:bg-blue-400 text-xl text-gray-800">
            <td className="pr-4 pl-2 border-r border-gray-500">{place}</td>
            <td className="pr-4 pl-2 border-r border-gray-500 ">{name}</td>
            <td className="pl-2 pr-2">{score}</td>
        </tr>
    );
}