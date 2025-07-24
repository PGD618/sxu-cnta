'use client';

import React, { useEffect, useState } from 'react';

interface Award {
    name: string;
    level: string;
    members: string[];
}

interface HonorData {
    year: string;
    awards: Award[];
}

const Timeline: React.FC = () => {
    const [honors, setHonors] = useState<HonorData[]>([]);
    const [selectedYear, setSelectedYear] = useState<string | null>(null);

    useEffect(() => {
        fetch('/data/honors.json')
            .then((res) => res.json())
            .then((data: HonorData[]) => {
                setHonors(data);
                if (data.length > 0) {
                    setSelectedYear(data[0].year);
                }
            });
    }, []);

    const selectedAwards = honors.find(h => h.year === selectedYear)?.awards || [];

    if (!honors.length) {
        return <div className="text-center text-gray-400">Loading Honors...</div>;
    }

    return (
        <div className="honors-container">
            <div className="year-tabs">
                {honors.map((honor) => (
                    <button
                        key={honor.year}
                        className={`year-tab ${selectedYear === honor.year ? 'active' : ''}`}
                        onClick={() => setSelectedYear(honor.year)}
                    >
                        {honor.year}
                    </button>
                ))}
            </div>

            <div className="awards-waterfall">
                {selectedAwards.map((award, awardIndex) => (
                    <div key={awardIndex} className="award-card-mobile neon-border-card">
                        <h3 className="award-name-mobile">{award.name}</h3>
                        <p className="award-level-mobile">{award.level}</p>
                        <div className="award-members-mobile">
                            <strong>队员:</strong> {award.members.join(', ')}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;