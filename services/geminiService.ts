const wordListString = "Easy, Ahead, Sacrifice, Happy, Discussion, Satisfaction, Encourage, System, Quick, Comfort, Judge, Women, Desire, Bold, Brave, Defeat, Danger, Craze, Risk, Peace, Character, Unity, Cooperation, Worry, Pursue, War, Plan, Organisation, Government, Foreign, Specific, Law, Leader, Friends, Time, Understanding, Utilize, Honour, Method, Systematic, Carefully, Easy, System, Clear, Rest, Problem, Differ, Failure, Atom, Time, Habit, Junior, Beauty, Proof, Discipline, Challenge, Love, Step, Difficult, Duty, Idea, Books, Future, Music, Property, Error, Work, Justice, Charity, History, Kindness, Self Control, Faith, Life, Word, Happiness, Educate, Soul, Business, Medicine, Exercise, Poetry, Intelligence, Old, Patriotism, Criticism, Fear, Past, Tear, Friendship, World, Chance, Mother, Heart, Power, Family, Wealth, Philosophy, Greatness, Honour, Women, Law, Persuade, Religion, Policy, Truth, Compromise, Quick, Climb, Understanding, Law, Persuade, Defeat, Method, Carelessness, Hope, Efficiency, Danger, Complete, Competition, Judge, Time, Character, Worry, Unity, Spirit, Attack, Curiosity, Lonely, Guide, Confusion, Merit, Admire, Aggressive, Think, Criticism, Watch, Strict, Blind, Cry, Exercise, Precaution, Depression, Pity, Score, Hungry, Empty, Tired, Team, Never, Weapon, House, Strong, Imagination, Possible, Record, Hard Work, Success, Life, Blood, Solder, Face, Play ground, Snake, Luck, Trust Religion, Won, Health, Worry, Company, Father, Discipline, Fault, Attempt, System, Victory, Impossible, Sister, Challenge, Knowledge, Solve, Heritage, Follow, Projects, Honey, Tackle, Punctuality, Climb, Lies, Reaction, Unable, Offer, Drive, Meeting, Assist, Think, Confuse, Peace, Cinema, Garden, Decent, Selfish, Fit, Brave, Mother, Light, Home, Teacher, Interest, Policy, Pay, Save, Doctor, Preach, Duties, India, Joy, Crook, Blunder, Rogue, Hijack, Laughter, Humanity, Education, Medicine, Honest, Careless, Attack, Stamina, Competition, Plan, Continue, Freedom, Play, Fire, Cheerful, Laughing, Save, Time, Overcome, Danger, Plan, Officer, Initiation, Progress, Remember, Line, Leadership, Tests, Read, Jealous, Influence, Done, Difference, Fool, Follower, Bitter, Carrier, Board, Command, Accident, Quality, Hide, Master, Courage, College, Enemy, Journal, Kill, Impossible, Team, Pet, Past, Quantity, Behaviour, Learned, Over, Literary, Unity, Minister, Irritate, Inauguration, Minor, Major, Hurry, Enforce, Thief, Pity, Fire, Speed, Party, Mercy, Fear, Advertisement, Politeness, Above, Victory, Buy, Thank, Baby, Withdraw, Indefinite, Person, Deny, Attempt, Adventure, Differ, Admire, Accident, Certainly, Cooperation, Compel, Angry, Curiosity, Crime, Competition, Attack, Interest, Doubt, Response, Desire, Demand, Friendly, Fallow, Follow, Avoid, Educated, Good, General, Bathe, Question, Humour, Strict, Examination, Inspection, Moble, Leadership, Confidence, Progress, Receive, Speak, Continue, Limit, Social, Pity, Climb, Busy, Vulgar, Worthy, Rocket, Illiteracy, Tidy, Batch, Hijacking, Memory, Bring, Prize, Heat, Average, Drink, Team, Courage, Graduate, Disagree, Satisfy, Game, Mind, Agree, Care, Gun, Solve, Murder, Conceince, Courage, Point, Tidy, Dismiss, Dream, Recognise, Bluff, Nation, Fight, Wealth, Union, Tact, Obey, Need, Doubt, Worthy, Holiday, Precious, Appreciate, Pride, Bitter, Average, Except, Crowd, Attempt, Organise, Honest, Hero, Action, Lesson, Family, Freedom, Pool, Mechanic, Class, Senior, Hope, Profession, Odd, Pity, Happy, Educational, Coeducation, Praise, Feel, Listen, Canteen, Chief, Lost, Possible, All, Care, Operation, Map, Behave, Convince, Avoid, Best, Dames, Alert, Climb, Advantage, Disobey, Defend, Accident, Ambition, Brother, Master, Firing, Speed, Laughter, Contrary, Die, Busy, Border, Obey, Afraid, Promote, Childhood, Power, Past, Score, Honey, Complaint, Alone, Propagate, Agree, Lead, Escape, Graduate, Crime, Obedience, Attack, Films, Paint, Treat, Pleasure, Model, Steel, Reward, Challenge, Correct, Give, Leader, Down, Discussion, Lie, Respect, Desperate, Intelligence, Tense, Speak, Lost, Dialogue, Diagnose, Disgrace, Etiquette, Excel, Frank, Ghost, Dynamic, Eager, Election, Embrace, Annoy, Envoy, Equal, Espirit";

// Process the string into a unique list of words
const uniqueWords = Array.from(
  new Set(
    wordListString
      .split(/[\s,]+/) // Split by spaces or commas
      .map(word => word.trim())
      .filter(word => word.length > 0) // Remove empty strings
  )
);

/**
 * Shuffles an array and returns a new shuffled array (Fisher-Yates shuffle).
 * @param array The array to shuffle.
 */
function shuffle<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

/**
 * Gets a list of 60 unique, shuffled words for the test.
 */
export function fetchWords(): string[] {
  if (uniqueWords.length < 60) {
    console.warn("Word list has fewer than 60 unique words. Words will be repeated to fill the list.");
    const baseShuffled = shuffle(uniqueWords);
    let fullList: string[] = [];
    while (fullList.length < 60) {
      fullList = fullList.concat(baseShuffled);
    }
    return fullList.slice(0, 60);
  }

  const shuffledWords = shuffle(uniqueWords);
  return shuffledWords.slice(0, 60);
}
