import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "How is your shrimp farm doing? Everything is running smoothly, right?",
    answers: [
      {
        text: "(Compared to other farms, it's still pretty safe!)",
        scores: { existing: 2 }
      },
      {
        text: "(I'm a bit worried about the spread of disease and temperature changes that could affect it.)",
        scores: { fanatic: 2, shrimp: 1 }
      },
      {
        text: "(I take care of it the usual way; as for the harvest, I leave it to God!)",
        scores: { ordinary: 2 }
      },
      {
        text: "(From reports and business calculations, everything is still on plan!)",
        scores: { trader: 2, 'hi-tech': 1 }
      }
    ]
  },
  {
    id: 2,
    text: "Have you given your best for the shrimp in your farm?",
    answers: [
      {
        text: "(I have planned the best operations and technology for my farm, so everything is measurable.)",
        scores: { trader: 2, 'hi-tech': 1 }
      },
      {
        text: "(If I follow the pattern from previous harvests, it should be safe.)",
        scores: { ordinary: 2 }
      },
      {
        text: "(Based on discussions in the community, this is the best for the shrimp and farm conditions in this area.)",
        scores: { existing: 2 }
      },
      {
        text: "(Support from chemistry, physics, and treatment has already followed expert recommendations.)",
        scores: { fanatic: 2, shrimp: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "What motivates you to farm shrimp? Is there a special story?",
    answers: [
      {
        text: "(I have planned the best operations and technology for my farm, so everything is measurable.)",
        scores: { trader: 2, 'hi-tech': 1 }
      },
      {
        text: "(This is a family business, so I just continue it.)",
        scores: { ordinary: 2, shrimp: 1 }
      },
      {
        text: "(I want to become an aquaculture expert, not just in theory but also in practical fieldwork.)",
        scores: { fanatic: 2, 'hi-tech': 1 }
      },
      {
        text: "(I follow my friends and neighbors because I also live in a coastal area!)",
        scores: { existing: 2, shrimp: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "Are you a member of a fish farmer community? It seems fun to have a place to share with fellow farmers!",
    answers: [
      {
        text: "(Wow, coincidentally, I'm even a committee member of the community!)",
        scores: { existing: 2 }
      },
      {
        text: "((Yes! So we can share prices and update national market conditions.)",
        scores: { trader: 2, fanatic: 1 }
      },
      {
        text: "(No, I just continue the family business.)",
        scores: { ordinary: 2, shrimp: 1 }
      },
      {
        text: "(I just join online because I already use technology for monitoring, so I don't have to visit often.)",
        scores: { 'hi-tech': 2, fanatic: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "Ada teknologi atau fasilitas keren yang kamu pasang di tambak? Bagi dong ceritanya!",
    answers: [
      {
        text: "(Komplit! Semua teknologi terbaru dan terbaik udah aku pasang di tambak.)",
        scores: { 'hi-tech': 2, trader: 1 }
      },
      {
        text: "(Yang basic-basic aja, pakai cara turun-temurun, masih aman kok.)",
        scores: { ordinary: 2, shrimp: 1 }
      },
      {
        text: "(Aku hanya pakai rekomendasi dari ahli yang terpercaya, biar efektif dan efisien.)",
        scores: { fanatic: 2 }
      },
      {
        text: "(Kalau bisa beli bareng-bareng biar dapet diskon, ya langsung gas aja!)",
        scores: { existing: 2, trader: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "Seberapa besar sih peran bisnis udang ini dalam hidupmu? Penting banget atau gimana?",
    answers: [
      {
        text: "(Udang udah jadi nafas hidup keluarga kami.)",
        scores: { shrimp: 2, fanatic: 1 }
      },
      {
        text: "(Aku juga punya bisnis lain di komoditas yang cuannya besar.)",
        scores: { trader: 2 }
      },
      {
        text: "(Sejauh ini masih fokus ke udang dulu, karena lebih paham soal komoditas ini.)",
        scores: { fanatic: 2, ordinary: 1 }
      },
      {
        text: "(Sekarang sih komunitas lagi di udang, kalau nanti ada tren lain yang bagus, mungkin bakal coba juga.)",
        scores: { 'hi-tech': 2, existing: 1, ordinary: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "If the harvest is abundant, what do you usually do with the shrimp? Any special plans?",
    answers: [
      {
        text: "(If there are extras, I usually share meals with the team and neighbors!)",
        scores: { ordinary: 1, fanatic: 1, 'hi-tech': 1 }
      },
      {
        text: "(I sell it again to the local residents.)",
        scores: { trader: 2, fanatic: 1, 'hi-tech': 1 }
      },
      {
        text: "(Sometimes I just bury it.)",
        scores: { shrimp: 3 }
      },
      {
        text: "(If there are no options, I have to throw it into the river or sea.)",
        scores: { ordinary: 2 }
      }
    ]
  }
];